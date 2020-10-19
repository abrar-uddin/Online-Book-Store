from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Book
from django.contrib.auth.models import User


# Create your tests here.

class ShoppingCartFeatureTests(APITestCase):
    book1 = Book.objects.get(id=1).__dict__
    del book1['_state']
    del book1['id']

    book2 = Book.objects.get(id=2).__dict__
    del book2['_state']
    del book2['id']

    def setUp(self):
        Book.objects.create(**self.book1)
        Book.objects.create(**self.book2)
        User.objects.create(username='tester')

    def test_item_create(self, book=1):
        """
        Ensure we can add a new item object.
        """
        url = reverse('item-list')
        data = {'user': 1, 'book': book, 'quantity': 1}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_item_read(self):
        """
        Ensure we can read the new item object.
        """
        self.test_item_create()

        url = reverse('item-detail', kwargs={"pk": 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_item_update(self, book=1, quantity=2):
        """
        Ensure we can update item object.
        """
        self.test_item_create(book)

        url = reverse('item-detail', kwargs={"pk": book})
        data = {'user': 1, 'book': book, 'quantity': quantity}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_item_delete(self):
        """
        Ensure we can del item object.
        """
        self.test_item_create()

        url = reverse('item-detail', kwargs={"pk": 1})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_shopping_cart_create(self):
        """
        Ensure we can add a new shopping cart object.
        """
        url = reverse('shopping_cart-list')
        data = {'user': 1, 'book': 1, 'quantity': 1}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_shopping_cart_read(self):
        """
        Ensure we can read the new shopping cart object.
        """
        self.test_shopping_cart_create()

        url = reverse('shopping_cart-detail', kwargs={"pk": 1})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_shopping_cart_delete(self):
        """
        Ensure we can del shopping cart object.
        """
        self.test_shopping_cart_create()

        url = reverse('shopping_cart-detail', kwargs={"pk": 1})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_shopping_cart_get_cart_total(self):
        """
        Ensure we can get the total of the shopping cart object.
        """
        self.test_shopping_cart_create()

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_total/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, 0)

    def test_shopping_cart_get_cart_items(self):
        """
        Ensure we can get the total of the shopping cart object.
        """
        self.test_shopping_cart_create()

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_items/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])

    def test_add_item_to_cart(self):
        """
        Ensure when item gets created it gets added to the user cart.
        """
        self.test_item_create()

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_items/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()[0], {'id': 1, 'user': 1, 'book': 1, 'quantity': 1})

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_total/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, 26.56)

    def test_update_item_in_cart(self):
        """
        Ensure when item gets updated, user cart also gets updated.
        """
        self.test_item_update()

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_items/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json()[0], {'id': 1, 'user': 1, 'book': 1, 'quantity': 2})

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_total/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, 53.12)

    def test_multiple_add_item_to_cart(self):
        """
        Ensure when multiple items get created it gets added to the user cart.
        """
        self.test_item_create()
        self.test_item_create(book=2)

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_items/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [{'id': 1, 'user': 1, 'book': 1, 'quantity': 1},
                                           {'id': 2, 'user': 1, 'book': 2, 'quantity': 1}])

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_total/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, 54.12)

    def test_multiple_update_item_in_cart(self):
        """
        Ensure when multiple items get updated, user cart also gets updated.
        """
        self.test_item_update()
        self.test_item_update(book=2)

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_items/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), [{'id': 1, 'user': 1, 'book': 1, 'quantity': 2},
                                           {'id': 2, 'user': 1, 'book': 2, 'quantity': 2}])

        url = reverse('shopping_cart-detail', kwargs={"pk": 1}) + 'get_cart_total/'
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, 108.24)
