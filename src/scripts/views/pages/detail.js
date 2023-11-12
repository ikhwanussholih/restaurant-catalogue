import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate, createRestaurantDetailReviewTemplate, createRestaurantAddDetailReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import ButtonAddReview from '../../utils/review-button-initiator';

const Detail = {
  async render() {
    return `
    <h1 id="detail__restaurants">Detail Restaurant</h1>
    <section class="detail__restaurant" id="detail__restaurant"></section>

    <h3 id="reviewer">Reviewer</h3>
    <div clas="comment-session">
      <div class="post-comments"></div>
      <div class="post-comment"></div>
    </div>

    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    //   fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail__restaurant');
    const restaurantReviewContainer = document.querySelector('.post-comment');
    console.log(restaurantReviewContainer);
    const restaurantAddReviewContainer = document.querySelector('.post-comments');
    console.log(restaurantAddReviewContainer);

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurantAddReviewContainer.innerHTML = createRestaurantAddDetailReviewTemplate();
    restaurantReviewContainer.innerHTML = restaurant.customerReviews.map(
      (customer) => createRestaurantDetailReviewTemplate(customer),
    ).join('');

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        foods: restaurant.menus.foods,
        drinks: restaurant.menus.drinks,
        reviews: restaurant.customerReviews,
      },
    });

    const submitAddReview = document.querySelector('.form__submit__button');
    submitAddReview.addEventListener('click', async () => {
      await ButtonAddReview.init({
        id: restaurant.id,
      });
      const result = await RestaurantSource.detailRestaurant(restaurant.id);
      restaurantReviewContainer.innerHTML = result.customerReviews.map(
        (customer) => createRestaurantDetailReviewTemplate(customer),
      ).join('');
    });
    console.log(submitAddReview);
  },
};

export default Detail;
