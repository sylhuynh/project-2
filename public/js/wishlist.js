$(document).ready(function() {
  function getWishlist() {
    $.get("/api/wishlists", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createWishlistCard(data[i]));
      }
      renderWishlistCard(rowsToAdd);
    });
  }

  function createWishlistCard(wishlistData) {
    let WishlistCard = `<div class="uk-container uk-margin-medium uk-margin-large-bottom uk-margin-medium-top">
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
    <div class="uk-card-media-left uk-cover-container">
      <img src="../images/wanderful-hero.jpg" alt="" uk-cover>
      <canvas width="600" height="400"></canvas>
    </div>
    <div>
      <div class="uk-card-body">
        <h3 class="uk-card-title">${wishlistData.destination}</h3>
        <br>
        <div class="uk-card-footer">
          <ul class="uk-iconnav">
            <a class="uk-button uk-button-small uk-link-reset add-visited">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: location" id="san-diego-visited"></span>
              Add visited
            </a>
            <a class="uk-button uk-button-small uk-link-reset add-wishlist">
              <span class="uk-icon uk-margin-small-right" uk-icon="icon: heart" id="san-diego-wishlist"></span>
              Add wishlist
            </a>
            <a class="uk-button uk-button-small uk-link-reset add-delete">
            <span class="uk-icon uk-margin-small-right" uk-icon="icon: trash"></span>
            Delete
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>`;
    return WishlistCard;
  }

  function renderWishlistCard(rows) {
    if (rows.length) {
      console.log(rows);
      $(".wishlist-card-body").prepend(rows);
    }
  }

  getWishlist();
});
