//////////////////////////////////////////////////////////////////////// abalytics.html: кнопка "работа прибора"
const controlDiv = document.getElementById("btn-hide__card");
const targetDiv = document.querySelector(".card__body");

if (controlDiv && targetDiv) {
  controlDiv.addEventListener("click", () => {
    targetDiv.classList.toggle("visually-hidden");
  });
}

//////////////////////////////////////////////////////////////////////// abalytics.html: кнопки периода

const periodButtons = document.querySelectorAll(".card__period-btn");

if (periodButtons) {
  periodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      periodButtons.forEach((btn) =>
        btn.classList.remove("card__period-btn--active")
      );

      button.classList.add("card__period-btn--active");
    });
  });
}

//////////////////////////////////////////////////////////////////////// error page

const mainHref = document.getElementById("main-href");
const analyticHref = document.getElementById("analytic-href");

function navigateTo(page) {
  try {
    window.location.href = page;
  } catch (error) {
    console.error("Ошибка при переходе:", error);
    window.location.href = "error.html";
  }
}

// для симуляции с кнопки
function simulateError() {
  window.location.href = "error.html";
}

if (mainHref) {
  mainHref.addEventListener("click", function () {
    navigateTo("main.html");
  });
}

if (analyticHref) {
  analyticHref.addEventListener("click", function () {
    navigateTo("analytics.html");
  });
}

//////////////////////////////////////////////////////////////////////// main.html: работа с сервером + поисковая строка

const favoriteBody = document.querySelector(".favorite__body");
const searchInput = document.querySelector(".search__input");

async function loadData() {
  try {
    const response = await fetch("../data.json");

    if (!response.ok) {
      throw new Error("Сеть ответила с ошибкой: " + response.status);
    }

    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return [];
  }
}

function createFavoriteItem(item) {
  const div = document.createElement("div");
  div.classList.add("favorite__list");

  // работа с иконками уведомлений
  const iconsNotice = [
    `<svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 22C13.6 22 14.5 21.1 14.5 20H10.5C10.5 21.1 11.4 22 12.5 22ZM18.5 16V11C18.5 7.93 16.87 5.36 14 4.68V4C14 3.17 13.33 2.5 12.5 2.5C11.67 2.5 11 3.17 11 4V4.68C8.14 5.36 6.5 7.92 6.5 11V16L4.5 18V19H20.5V18L18.5 16ZM16.5 17H8.5V11C8.5 8.52 10.01 6.5 12.5 6.5C14.99 6.5 16.5 8.52 16.5 11V17Z"
        fill="black"
        fill-opacity="0.6"
      />
    </svg>`,
    `<svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_2077)">
        <path
          d="M8.08 4.08L6.65 2.65C4.25 4.48 2.67 7.3 2.53 10.5H4.53C4.68 7.85 6.04 5.53 8.08 4.08ZM20.47 10.5H22.47C22.32 7.3 20.74 4.48 18.35 2.65L16.93 4.08C18.95 5.53 20.32 7.85 20.47 10.5ZM18.5 11C18.5 7.93 16.86 5.36 14 4.68V4C14 3.17 13.33 2.5 12.5 2.5C11.67 2.5 11 3.17 11 4V4.68C8.13 5.36 6.5 7.92 6.5 11V16L4.5 18V19H20.5V18L18.5 16V11ZM12.5 22C12.64 22 12.77 21.99 12.9 21.96C13.55 21.82 14.08 21.38 14.34 20.78C14.44 20.54 14.49 20.28 14.49 20H10.49C10.5 21.1 11.39 22 12.5 22Z"
          fill="black"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2077">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>`,
    `<svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_2284)">
        <path
          d="M20.5 18.69L8.34 6.14L5.77 3.49L4.5 4.76L7.3 7.56V7.57C6.78 8.56 6.5 9.73 6.5 10.99V15.99L4.5 17.99V18.99H18.23L20.23 20.99L21.5 19.72L20.5 18.69ZM12.5 22C13.61 22 14.5 21.11 14.5 20H10.5C10.5 21.11 11.39 22 12.5 22ZM18.5 14.68V11C18.5 7.92 16.86 5.36 14 4.68V4C14 3.17 13.33 2.5 12.5 2.5C11.67 2.5 11 3.17 11 4V4.68C10.85 4.71 10.71 4.76 10.58 4.8C10.48 4.83 10.38 4.87 10.28 4.91H10.27C10.26 4.91 10.26 4.91 10.25 4.92C10.02 5.01 9.79 5.12 9.57 5.23C9.57 5.23 9.56 5.23 9.56 5.24L18.5 14.68Z"
          fill="black"
          fill-opacity="0.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2284">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>`,
  ];

  let currentIndex = 0;

  const button = document.createElement("button");

  function updateIcon() {
    button.innerHTML = iconsNotice[currentIndex];
    currentIndex = (currentIndex + 1) % iconsNotice.length;
  }

  updateIcon();
  button.addEventListener("click", updateIcon);

  div.innerHTML = `<img src="${item.image}" alt="image" />
                   <h2 class="favorite__list-name">${item.name}</h2>
                   <div class="favorite__list-status">
                       <select class="favorite__list-select">
                           <option ${
                             item.status === "Свободен" ? "selected" : ""
                           }>Свободен</option>
                           <option ${
                             item.status === "В работе" ? "selected" : ""
                           }>В работе</option>
                       </select>
                   </div>`;

  div.appendChild(button);

  return div;
}

async function initializeFavorites() {
  const jsonData = await loadData();

  // отрисовка данных
  jsonData.forEach((item) => {
    const favoriteItem = createFavoriteItem(item);
    favoriteBody.appendChild(favoriteItem);
  });

  // поисковая строка
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const favoriteItems = favoriteBody.querySelectorAll(".favorite__list");

    favoriteItems.forEach((item) => {
      const nameElement = item.querySelector(".favorite__list-name");

      if (nameElement) {
        const name = nameElement.textContent.toLowerCase();

        if (name.includes(filter)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
}

initializeFavorites();
