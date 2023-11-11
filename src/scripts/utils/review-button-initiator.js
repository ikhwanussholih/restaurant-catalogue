import RestaurantSource from '../data/restaurant-source';

const ButtonAddReview = {
  async init({ id }) {
    this._id = id;

    await this._addReview(this._id);
  },

  async _addReview(restaurantId) {
    const customerName = document.querySelector('#name');
    const customerReview = document.querySelector('#review');

    if (customerName.value === '' || customerReview === '') {
      alert('Kolom tidak boleh kosong');
    } else {
      const data = {
        id: restaurantId,
        name: customerName.value,
        review: customerReview.value,
      };

      await RestaurantSource.reviewRestaurant(data);
      customerName.value = '';
      customerReview.value = '';
    }
  },
};

export default ButtonAddReview;
