$(function () {
  $("#tabs").tabs({ active: 0 });
  $(document).tooltip();
  $(".tech__img").tooltip({
    position: {
      my: "center top",
      at: "center bottom+20",
      collision: "none",
    },
  });
  $("#communicate").selectmenu();
});
