from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Book, Item, ShoppingCart
from django.contrib.auth.models import User


# Create your tests here.

class ItemTests(APITestCase):
    book = Book.objects.get(id=1).__dict__
    del book['_state']
    del book['id']

    def setUp(self):
        Book.objects.create(**self.book)
        User.objects.create(username='tester')

    def test_item(self):
        """
        Ensure we can add a new item object.
        """
        url = reverse('item-list')
        data = {'user': 1, 'book': 1, 'quantity': 1}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        """
        Ensure we can update item object.
        """
        url = reverse('item-detail', kwargs={"pk": 1})
        data = {'user': 1, 'book': 1, 'quantity': 2}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        """
        Ensure we can del item object.
        """
        url = reverse('item-detail', kwargs={"pk": 1})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
