var feedbackPopup = document.querySelector(".feedback-container");
var feedbackButton = document.querySelector(".company-message");
var feedbackClose = document.querySelector(".feedback-close");
var popup = document.querySelector(".feedback-container");
var form;

if (popup) {
    form = popup.querySelector("form");

    form.addEventListener("submit", function (evt) {
        if (!form.querySelector('.feedback-email-data').value) {
            popup.classList.remove("modal-error");
            popup.offsetWidth = popup.offsetWidth;
            evt.preventDefault();
            popup.classList.add("modal-error");
        }
    });
}

if (feedbackButton != null && feedbackClose != null) {
    feedbackButton.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.add("show-block");
    });

    feedbackClose.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.remove("show-block");
        popup.classList.remove("modal-error");
    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 27) {
            if (feedbackPopup.classList.contains("show-block")) {
                feedbackPopup.classList.remove("show-block");
            }
        }
    });
}

var buyItemButtons = document.querySelectorAll(".catalog-popup-buy"), i;
var cartBlock = document.querySelector(".product-add-popap");
var cartClose = document.querySelector(".product-close");
var cartCancel = document.querySelector(".product-cancel-btn");

for (i = 0; i < buyItemButtons.length; ++i) {
	buyItemButtons[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		cartBlock.classList.add("show-block");
	})
}

cartClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

cartCancel.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartBlock.classList.contains("show-block")) {
            cartBlock.classList.remove("show-block");
        }
    }
});

var mapBlock = document.querySelector(".map-popap");
var mapLink = document.querySelector(".company-contacts-maps");
var mapClose = document.querySelector(".close-map");

if (mapLink) {
    mapLink.addEventListener("click", function (event) {
        event.preventDefault(event);
        mapBlock.classList.add("show-block");
    });
}

if (mapClose) {
    mapClose.addEventListener("click", function (event) {
        event.preventDefault(event);
        mapBlock.classList.remove("show-block");
    });
}