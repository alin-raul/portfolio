"use client";

import React, { useRef, useEffect, useState, RefObject } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  animate,
  useInView,
  AnimationPlaybackControls,
  useAnimationControls,
} from "framer-motion";
import { Card } from "../About/About";
import Link from "next/link";
import { containerAnimationVariants } from "@/utils/motion";
import { ArrowUpRight } from "lucide-react";

const MOBILE_BREAKPOINT = 768;
const WAVE_DURATION_SECONDS = 4;
const MIN_FONT_WEIGHT = 100;
const MAX_FONT_WEIGHT = 900;
const DESKTOP_EFFECT_RADIUS_PX = 400;
const MOBILE_EFFECT_RADIUS_PX = 250;
const DEFAULT_FONT_WEIGHT_SETTING = `'wght' ${MIN_FONT_WEIGHT}`;

function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

function calculateFontWeightSetting(
  distance: number,
  effectRadius: number,
  minWeight: number = MIN_FONT_WEIGHT,
  maxWeight: number = MAX_FONT_WEIGHT
): string {
  const weightMultiplier = Math.max(0, 1 - distance / effectRadius);
  const calculatedWeight =
    minWeight + (maxWeight - minWeight) * weightMultiplier;
  return `'wght' ${Math.round(calculatedWeight)}`;
}

interface LetterProps {
  letter: string;
  isInView: boolean;
  isPageLoaded: boolean;
  isMobile: boolean;
  viewportMouseX: MotionValue<number>;
  wavePosition: MotionValue<number>;
  containerRef: RefObject<HTMLDivElement | null>;
}

function Letter({
  letter,
  isInView,
  isPageLoaded,
  isMobile,
  viewportMouseX,
  wavePosition,
  containerRef,
}: LetterProps) {
  const letterRef = useRef<HTMLSpanElement>(null);

  const mouseDrivenWeight = useTransform(
    viewportMouseX,
    (latestViewportMouseX) => {
      if (
        !letterRef.current ||
        !containerRef.current ||
        !isFinite(latestViewportMouseX)
      ) {
        return DEFAULT_FONT_WEIGHT_SETTING;
      }
      const containerBounds = containerRef.current.getBoundingClientRect();
      const letterCenterViewport =
        containerBounds.left +
        letterRef.current.offsetLeft +
        letterRef.current.offsetWidth / 2;
      const distance = Math.abs(latestViewportMouseX - letterCenterViewport);
      return calculateFontWeightSetting(distance, DESKTOP_EFFECT_RADIUS_PX);
    }
  );

  const waveDrivenWeight = useTransform(wavePosition, (latestWavePos) => {
    if (!letterRef.current || !containerRef.current) {
      return DEFAULT_FONT_WEIGHT_SETTING;
    }
    const containerWidth = containerRef.current.offsetWidth;
    const wavePeakPosition = containerWidth * latestWavePos;
    const letterCenterContainer =
      letterRef.current.offsetLeft + letterRef.current.offsetWidth / 2;
    const distance = Math.abs(wavePeakPosition - letterCenterContainer);
    return calculateFontWeightSetting(distance, MOBILE_EFFECT_RADIUS_PX);
  });

  const dynamicFontWeight =
    !isInView || !isPageLoaded
      ? DEFAULT_FONT_WEIGHT_SETTING
      : isMobile
      ? waveDrivenWeight
      : mouseDrivenWeight;

  return (
    <motion.span
      ref={letterRef}
      style={{
        fontVariationSettings: dynamicFontWeight,
        position: "relative",
        display: "inline-block",
        transition: !isPageLoaded
          ? "none"
          : "font-variation-settings 0.1s ease-out",
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

interface StyledLinkCardProps {
  href: string;
  text: string;
  className?: string;
}

function StyledLinkCard({ href, text, className = "" }: StyledLinkCardProps) {
  const commonCardClasses =
    "group w-fit px-5 hover:px-6 py-4 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl";
  const commonSpanClasses =
    "group-hover:opacity-100 cursor-pointer flex justify-center items-center gap-1 transition-opacity duration-400";
  const commonIconClasses =
    "opacity-70 hidden hover:flex group-hover:flex transition-opacity duration-400";

  return (
    <div
      className={`text-md max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem] ${className}`}
    >
      <Link href={href}>
        <div className={commonCardClasses}>
          <span className={commonSpanClasses}>
            <ArrowUpRight className={commonIconClasses} size={18} />
            <span className="translate-y-[0.02rem]">{text}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function TextWeightGradient() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const isMainInView = useInView(mainContainerRef, {
    once: true,
    amount: 0.1,
  });

  const isTextInView = useInView(textContainerRef, {
    once: false,
    margin: "0px 0px -50px 0px",
  });

  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const mainControls = useAnimationControls();

  const viewportMouseX = useMotionValue(Infinity);
  const wavePosition = useMotionValue(0);
  const text = "Portfolio";

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.readyState === "complete") {
      setIsPageLoaded(true);
    } else {
      const handleLoad = () => setIsPageLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    if (isMainInView && isPageLoaded) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isMainInView, isPageLoaded, mainControls]);

  useEffect(() => {
    if (!isPageLoaded || isMobile || !isTextInView) {
      viewportMouseX.set(Infinity);
      return;
    }
    const handleMouseMove = (e: MouseEvent) => viewportMouseX.set(e.clientX);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, isTextInView, viewportMouseX, isPageLoaded]);

  useEffect(() => {
    let playbackControls: AnimationPlaybackControls | null = null;

    if (isPageLoaded && isMobile && isTextInView) {
      playbackControls = animate(wavePosition, [0, 1], {
        duration: WAVE_DURATION_SECONDS,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      });
    } else {
      wavePosition.set(0);
    }
    return () => {
      if (playbackControls) playbackControls.stop();
    };
  }, [isMobile, isTextInView, wavePosition, isPageLoaded]);

  return (
    <motion.div
      ref={mainContainerRef}
      className="flex justify-center items-center w-full"
      variants={containerAnimationVariants}
      initial="hidden"
      animate={mainControls}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-fit h-fit p-2 relative">
        <div className="text-md my-5 max-w-[22rem] md:max-w-[30rem] lg:max-w-[32rem]">
          <Card className="w-fit px-4 py-2">
            <span className="opacity-90">2024-25</span>
          </Card>
        </div>

        <div
          ref={textContainerRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] 2xl:text-[12rem] font-yapari text-center text-white cursor-default select-none whitespace-nowrap flex"
          aria-label={text}
          style={{ fontVariationSettings: DEFAULT_FONT_WEIGHT_SETTING }}
        >
          {text.split("").map((char, index) => (
            <Letter
              key={`${char}-${index}`}
              letter={char}
              isInView={isTextInView}
              isPageLoaded={isPageLoaded}
              isMobile={isMobile}
              viewportMouseX={viewportMouseX}
              wavePosition={wavePosition}
              containerRef={textContainerRef}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-4 items-center">
          <StyledLinkCard href="#contact" text="Get in Contact" />
          <StyledLinkCard href="/curriculum" text="View CV" />
          {/* <StyledLinkCard
            href="#contact"
            text="Feeling lucky?"
            className="ml-auto"
          /> */}
        </div>
      </div>
    </motion.div>
  );
}
