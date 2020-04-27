$(document).ready(function() {
  function getVisited() {
    $.get("/api/visited", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createVisitedCard(data[i]));
      }
      renderVisitedCard(rowsToAdd);
    });
  }

  function createVisitedCard(visitedData) {
    let visitedCard = `<div class="uk-container uk-margin-medium uk-margin-large-bottom uk-margin-medium-top">
<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
  <div class="uk-card-media-left uk-cover-container">
    <img src="../images/wanderful-hero.jpg" alt="" uk-cover>
    <canvas width="600" height="400"></canvas>
  </div>
  <div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">${visitedData.destination}</h3>
      <br>
    </div>
  </div>
</div>
</div>`;
    return visitedCard;
  }

  function renderVisitedCard(rows) {
    if (rows.length) {
      console.log(rows);
      $(".visited-card-body").prepend(rows);
    }
  }

  getVisited();
});
