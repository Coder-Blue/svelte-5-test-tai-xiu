<script>
  import SvelteSeo from "svelte-seo";

  function lacXucXac() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let die3 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("die1").textContent = die1;
    document.getElementById("die2").textContent = die2;
    document.getElementById("die3").textContent = die3;

    let tong = die1 + die2 + die3;

    let resultText = `Tổng số điểm: ${tong} - `;

    if (tong >= 11 && tong <= 17) {
      resultText += "Tài";
    } else if (tong >= 4 && tong <= 10) {
      resultText += "Xỉu";
    }

    document.getElementById("result").textContent = resultText;
  }
</script>

<SvelteSeo
  title="Game Tài Xỉu"
  description="Vào chơi tài xỉu cùng bạn Lê Đức Anh nhe. Chúc bạn chơi vui vẻ, với trò chơi được code đơn giản này nhe."
  keywords="tài xỉu, ducanhvip, JavaScript, SvelteKit, Tailwindcss, taixiu17"
  canonical="https://taixiu-17.vercel.app/"
  openGraph={{
    title: "Tài xỉu 17 | Chơi cùng bạn Lê Đức Anh nhe",
    description:
      "Trò vui được code đơn giản cùng bạn Lê Đức Anh. Hãy thử chơi đơn giản và thử vận may nhé.",
    url: "https://taixiu-17.vercel.app/",
    type: "website",
    image: "https://i.ibb.co/XzkSFqv/tai-xiu-og-2.jpg",
  }}
  twitter={{
    card: "summary_large_image",
    site: "@taixiu17",
    title: "Tài xỉu 17 | Chơi cùng bạn Lê Đức Anh nhe",
    description:
      "Trò vui được code đơn giản cùng bạn Lê Đức Anh. Hãy thử chơi đơn giản và thử vận may nhé.",
    image: "https://i.ibb.co/R9fhjPB/tai-xiu-og-1.jpg",
  }}
/>

<div
  class="rounded-[10px] bg-white p-5 text-center shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
>
  <h1 class="text-[#333]">Game Tài Xỉu</h1>
  <div class="mx-0 my-5 flex justify-center">
    <div
      id="die1"
      class="mx-2.5 my-0 flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-[#e74c3c] text-3xl text-white"
    ></div>
    <div
      id="die2"
      class="mx-2.5 my-0 flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-[#e74c3c] text-3xl text-white"
    ></div>
    <div
      id="die3"
      class="mx-2.5 my-0 flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-[#e74c3c] text-3xl text-white"
    ></div>
  </div>
  <button
    onclick={lacXucXac}
    class="cursor-pointer rounded-[5px] border-[none] bg-[#2ecc71] px-5 py-2.5 text-base text-[white] transition-[background-color] duration-[0.3s] hover:bg-[#27ae60]"
    >Lắc xúc xắc</button
  >
  <div class="mt-5 text-xl font-bold" id="result"></div>
</div>
