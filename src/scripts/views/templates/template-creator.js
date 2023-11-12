import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card">
<img data-src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" alt="${restaurant.name}">
<h3 class="rating"><i class="fa-solid fa-star" style="color: #ffdd00;"><span>${restaurant.rating}</span></i></h3>
<div class="card-content">
    <h3><a href='/#/detail/${restaurant.id}'>${restaurant.name}</a></h3>
    <h4><i class="fa-solid fa-location-dot" style="color: #e00022;"><span>${restaurant.city}</span></i></h4>
</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<img src="${CONFIG.BASE_IMAGE_LARGE + restaurant.pictureId}" alt="${restaurant.name}" class="pictureId">
<h2 class="retaurant__Title">${restaurant.name}</h2>
<div class="restaurant__content">
    <h3 id="rating"><i class="fa-solid fa-star" style="color: #ffdd00;"><span>${restaurant.rating}</span></i></h3>
    <h3 id="location"><i class="fa-solid fa-location-dot" style="color: #e00022;"><span>${restaurant.city}</span></i></h3>
    <p class="restaurant__content__address">${restaurant.address}</p>
    <h3><span>Deskripsi Restaurant</span></h3>
    <p class="restaurant__content__desc">${restaurant.description}</p>
    <h3 id="menu">Menu Yang Tersedia</h3>
    <section class="restaurant__menu">
        <article class="restaurant__menu__list">
            <h4>Menu Makanan</h4>
            <ul>
            ${restaurant.menus.foods.map((food) => `<li> - ${food.name}</li>`).join('')}
            </ul>
        </article>
        <article class="restaurant__menu__list">
            <h4>Menu Minuman</h4>
            <ul>
            ${restaurant.menus.drinks.map((drink) => `<li> - ${drink.name}</li>`).join('')}
            </ul>
        </article>
    </section>
</div>
`;

const createRestaurantAddDetailReviewTemplate = () => `
    <form>
        <div class="form-control">
            <label for="name">Nama</label>
            <input type="text" id="name" name="name" class="form__input" placeholder="Isi Nama Anda..">
        </div>
        <div class="form-control">
            <label for="review">Beri Komentar</label>
            <input type="text" id="review" name="name" class="form__input" placeholder="Berikan komentar anda disini...">
            <button class="form__submit__button">Submit</button>
        </div>
    </form>
`;

const createRestaurantDetailReviewTemplate = (customer) => `
    <div class="list">
        <div class="user">
            <div class="user-image"><i class="fa-solid fa-user"></i></div>
            <div class="user-meta">
                <div class="name">${customer.name}</div>
                <div class="date">${customer.date}</div>
            </div>
        </div>
        <div class="comment-post">${customer.review}</div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailReviewTemplate,
  createRestaurantAddDetailReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
