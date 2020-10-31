import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  lastName;

  results;
  @ViewChild("input", { static: true }) input: ElementRef;

  ikeaImages = [
    "https://www.ikea.com/sk/sk/images/products/lack-konferencny-stolik-biela__0702217_PE724349_S5.JPG?f=xxs",
    "https://www.ikea.com/sk/sk/images/products/hol-konferencny-stolik-akacia__0836247_PE601416_S5.JPG?f=xxs",
    "https://www.ikea.com/sk/sk/images/products/not-stojacia-lampa-cierna__0880213_PE611339_S5.JPG?f=xxs",
    "https://www.ikea.com/sk/sk/images/products/loberget-blyskaer-otocna-stolicka-biela__0806542_PE770243_S5.JPG?f=xxs",
    "https://www.ikea.com/sk/sk/images/products/rakkestad-skrina-s-2-dverami-ciernohneda__0780432_PE760497_S5.JPG?f=xxs",
    "https://www.ikea.com/sk/sk/images/products/svallet-pracovna-lampa-tmavosiva-biela__0881047_PE724753_S5.JPG?f=xxs",
  ];

  doIt() {
    const images = [...this.ikeaImages];
    if (!this.lastName || !this.lastName.length) {
      this.input.nativeElement.focus();
    } else {
      this.results = [
        {
          name: "BLYSKÄR",
          img: images.splice(
            Math.floor(Math.random() * Math.floor(images.length)),
            1
          ),
          price: "$24.99",
          stars: this.randomStars(),
        },
        {
          name: this.doMagic(),
          img: images.splice(
            Math.floor(Math.random() * Math.floor(images.length)),
            1
          ),
          price: "$99.99",
          stars: [1, 1, 1, 1, 1],
        },
        {
          name: "RIKTIG ÖGLA",
          img: images.splice(
            Math.floor(Math.random() * Math.floor(images.length)),
            1
          ),
          price: "$14.99",
          stars: this.randomStars(),
        },
      ];
    }
  }

  doMagic(): string {
    let replacements = 0;
    let result = this.lastName.toLowerCase().split("").reverse().join("");
    if (~result.indexOf("o")) {
      result = result.replace("o", "ö");
      replacements++;
    }
    if (~result.indexOf("a") && replacements < 2) {
      result = result.replace("a", Math.random() > 0.5 ? "å" : "ä");
      replacements++;
    }
    if (~result.indexOf("u") && replacements < 2) {
      result = result.replace("u", "ü");
      replacements++;
    }
    return result;
  }

  randomStars(): number[] {
    return new Array(Math.random() > 0.5 ? 3 : 4).fill(1);
  }
}
