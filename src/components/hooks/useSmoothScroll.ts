import Lenis from "@studio-freight/lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useSmoothScroll = () => {
  const [lenis, setLenis] = useState<Lenis | null>();
  const reqIdRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    const animate = (time: DOMHighResTimeStamp) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current as number);
  }, [lenis]);

  useLayoutEffect(() => {
    // インスタンスを生成
    const lenis = new Lenis({
      duration: 1.2, // アニメーションの継続時間
      easing: (time) =>
        // https://easings.net/en#easeInOutCubic
        Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      direction: "vertical", // 方向
      gestureDirection: "vertical",
      smooth: true, // スムーススクロールの有効・無効を設定
      smoothTouch: false, // タッチスクロール時のスムーススクロールの有効・無効を設定。(タッチデバイス本来の滑らかさを模倣することは不可能であるため、デフォルト無効)
      touchMultiplier: 2,
    });
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);
};

export default useSmoothScroll;
