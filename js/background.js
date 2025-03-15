const images = [
    "background1.jpg", "background2.jpg", "background3.jpg", "background4.jpg", "background5.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `../img/${chosenImage}`;

// img 태그에 스타일을 적용하여 화면 전체를 덮도록 설정
bgImage.style.position = 'absolute';
bgImage.style.top = '0';
bgImage.style.left = '0';
bgImage.style.width = '100%';
bgImage.style.height = '100%';
bgImage.style.objectFit = 'cover';  // 이미지가 화면을 덮도록 설정

// 이미지가 콘텐츠 뒤에 오도록 설정
bgImage.style.zIndex = '-1';

document.body.appendChild(bgImage)