from django.test import TestCase
from .models import Book, Item, ShoppingCart
from django.contrib.auth.models import User

# Create your tests here.


class ItemTestCase(TestCase):
    quantity = 1
    book_id = 55
    user_name = 'tester'
    book = Book.objects.get(id=book_id)
    user, _ = User.objects.get_or_create(username=user_name)

    def setUp(self):
        Item.objects.create(
            quantity=self.quantity,
            book=self.book,
            user=self.user
        )

    def test_item_was_created(self):
        item = Item.objects.get(quantity=self.quantity, book=self.book, user=self.user)
        self.assertEqual(item.__str__(), "({}) {}".format(self.quantity, self.book.name))
