from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Book, Item, ShoppingCart
from django.contrib.auth.models import User


# Create your tests here.

class ShoppingCartFeatureTests(APITestCase):
    book = Book.objects.get(id=1).__dict__
    del book['_state']
    del book['id']

    def setUp(self):
        Book.objects.create(**self.book)
        User.objects.create(username='tester')

    def test_item_create(self):
        """
        Ensure we can add a new item object.
        """
        url = reverse('item-list')
        data = {'user': 1, 'book': 1, 'quantity': 1}
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

    def test_item_update(self):
        """
        Ensure we can update item object.
        """
        self.test_item_create()
        url = reverse('item-detail', kwargs={"pk": 1})
        data = {'user': 1, 'book': 1, 'quantity': 2}
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
