export const getdata = async () => {
  const photo = document.querySelector(
    ".ph5 .pv-top-card__photo-wrapper img",
  )?.src;

  let photoBase64 = await urlContentToDataUri(photo);

  const getExpA = (n) => {
    return document
      .querySelectorAll("#experience ~ div")[1]
      .querySelectorAll(".artdeco-list__item")
      [n - 1]?.querySelector(".display-flex.align-items-center.mr1.t-bold span")
      ?.innerHTML?.replace(/<!---->/g, "");
  };

  const getExpB = (n, n2) => {
    return document
      .querySelectorAll("#experience ~ div")[1]
      .querySelectorAll(".artdeco-list__item")
      [n - 1]?.querySelectorAll("span.t-14.t-normal>span")
      [n2]?.innerHTML?.replace(/<!---->/g, "");
  };

  const getExpD = (n) => {
    return document
      .querySelectorAll("#experience ~ div")[1]
      .querySelectorAll(".artdeco-list__item")
      [n - 1]?.querySelector(
        ".pvs-list__item--with-top-padding .full-width.t-14.t-normal.t-black.display-flex.align-items-center span.visually-hidden",
      )
      ?.innerHTML?.replace(/<!---->/g, "");
  };

  console.log(`
============================
${photoBase64}
============================
`);
  return {
    photo: photoBase64 || undefined,
    fullname: document.querySelector(
      ".text-heading-xlarge.inline.t-24.v-align-middle.break-words",
    ).innerHTML,
    // email: document.querySelector(
    //   ".CriNdrepfVjkmOlXvDThwWrktOlbxEpcE .text-body-medium.break-words",
    // ).innerHTML,
    email: document.querySelector(
      ".text-body-small.inline.t-black--light.break-words",
    )?.innerHTML,
    Experience: "Experience",
    experience1a: getExpA(1),
    experience1b: getExpB(1, 0),
    experience1c: getExpB(1, 2),
    experience1d: getExpD(1),
    experience2a: getExpA(2),
    experience2b: getExpB(2, 0),
    experience2c: getExpB(2, 2),
    experience2d: getExpD(2),
    experience3a: getExpA(3),
    experience3b: getExpB(3, 0),
    experience3c: getExpB(3, 2),
    experience3d: getExpD(3),
  };
};

function urlContentToDataUri(url) {
  return fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((callback) => {
          let reader = new FileReader();
          reader.onload = function () {
            callback(this.result);
          };
          reader.readAsDataURL(blob);
        }),
    );
}
