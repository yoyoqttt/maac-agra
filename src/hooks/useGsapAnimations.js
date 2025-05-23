import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure GSAP and ScrollTrigger are registered globally for the project
// This should ideally be done once in your main App.js or index.js
// If not, you might need to register it here if this hook is used very early.
// However, best practice is a single registration point.
// gsap.registerPlugin(ScrollTrigger); // Usually done in App.jsx

/**
 * Custom Hook: useFadeInScroll
 * Applies a fade-in (and optional slide) animation to an element when it scrolls into view.
 *
 * @param {object} options - Configuration options for the animation.
 * @param {React.RefObject} options.trigger - Optional ref to an explicit trigger element. Defaults to the elementRef.
 * @param {string} options.start - ScrollTrigger start position (e.g., "top 85%").
 * @param {string} options.end - ScrollTrigger end position (e.g., "bottom top").
 * @param {string} options.toggleActions - ScrollTrigger toggleActions (e.g., "play none none none").
 * @param {number} options.duration - Animation duration in seconds.
 * @param {number} options.delay - Animation delay in seconds.
 * @param {number} options.y - Initial vertical offset (for slide-in effect).
 * @param {number} options.x - Initial horizontal offset (for slide-in effect).
 * @param {number} options.scale - Initial scale.
 * @param {number} options.opacityFrom - Initial opacity.
 * @param {number} options.opacityTo - Final opacity.
 * @param {object} options.stagger - Stagger options for animating children (e.g., { amount: 0.3, from: "start" }).
 * @param {boolean|number} options.scrub - ScrollTrigger scrub value (true for 1-second link, or a number).
 * @param {string} options.ease - GSAP ease string (e.g., "power2.out").
 * @param {boolean} options.once - If true, animation plays only once. toggleActions will be "play none none none".
 * @returns {React.RefObject} - A ref object to be attached to the target DOM element.
 */
export const useFadeInScroll = (options = {}) => {
  const elementRef = useRef(null); // This ref will be returned and attached to the DOM element

  const {
    trigger,
    start = "top 85%",
    end = "bottom top", // Default end, often not strictly needed for "play once" animations
    toggleActions = "play none none none",
    duration = 0.8,
    delay = 0,
    y = 50, // Default vertical slide-in
    x = 0,  // Default no horizontal slide-in
    scale = 1, // Default no initial scale change (can set to e.g. 0.8 for scale-up)
    opacityFrom = 0,
    opacityTo = 1,
    stagger,
    scrub = false,
    ease = 'power2.out',
    once = false, // New option to control if animation plays only once
  } = options;

  // useLayoutEffect is preferred for DOM manipulations / measurements before paint
  useLayoutEffect(() => {
    // Determine the actual element to animate and trigger from
    const targetElement = elementRef.current; // The element this ref is attached to
    const triggerElement = trigger ? trigger.current : targetElement; // Explicit trigger or self

    if (targetElement && triggerElement) {
      let animation;

      const finalToggleActions = once ? "play none none none" : toggleActions;

      const fromVars = {
        opacity: opacityFrom,
        y: y,
        x: x,
        scale: scale,
      };
      const toVars = {
        opacity: opacityTo,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: triggerElement,
          start,
          end,
          toggleActions: finalToggleActions,
          scrub,
          once: once, // ScrollTrigger's own 'once' property
        }
      };

      if (stagger && targetElement.children.length > 0) {
        // Animate children of the targetElement
        animation = gsap.fromTo(targetElement.children, fromVars, { ...toVars, stagger });
      } else {
        // Animate the targetElement itself
        animation = gsap.fromTo(targetElement, fromVars, toVars);
      }

      // Cleanup function to kill the animation and ScrollTrigger instance
      // This is important to prevent memory leaks when the component unmounts
      return () => {
        if (animation) {
          if (animation.scrollTrigger) {
            animation.scrollTrigger.kill();
          }
          animation.kill();
        }
      };
    }
  }, [
    trigger, start, end, toggleActions, duration, delay, y, x, scale,
    opacityFrom, opacityTo, stagger, scrub, ease, once
  ]); // Dependencies array: re-run effect if any of these change

  return elementRef; // Return the ref to be used by the component
};


/**
 * Custom Hook: useTextCharacterReveal
 * Animates characters of a text element into view.
 *
 * @param {object} options - Configuration options.
 * @param {number} options.duration - Duration of each character's animation.
 * @param {number} options.staggerAmount - Total stagger time for all characters.
 * @param {string} options.y - Initial vertical offset for characters.
 * @param {string} options.ease - GSAP ease string.
 * @param {string} options.start - ScrollTrigger start position.
 * @param {boolean} options.once - If true, animation plays only once.
 * @returns {React.RefObject} - A ref object for the parent text element.
 */
export const useTextCharacterReveal = (options = {}) => {
  const textRef = useRef(null);

  const {
    duration = 0.8,
    staggerAmount = 0.03,
    y = "100%", // Start from below
    ease = "expo.out",
    start = "top 85%",
    once = true,
    trigger,
  } = options;

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Ensure text is split into characters, wrapped in spans
    // This should ideally be done in the component's JSX for better SSR/static rendering
    // But can be a fallback here. Be cautious with this approach if text content is dynamic.
    const originalText = element.textContent;
    const chars = originalText.split('').map(char =>
      char === ' ' ? ' ' : `<span class="gsap-char" style="display:inline-block; overflow:hidden;"><span style="display:inline-block;">${char}</span></span>`
    ).join('');
    element.innerHTML = chars;

    const charElements = element.querySelectorAll('.gsap-char > span');

    if (charElements.length > 0) {
      const triggerElement = trigger ? trigger.current : element;

      const anim = gsap.from(charElements, {
        yPercent: 100, // Using yPercent for more consistent movement with varying font sizes
        opacity: 0,
        duration: duration,
        ease: ease,
        stagger: staggerAmount,
        scrollTrigger: {
          trigger: triggerElement,
          start: start,
          once: once, // ScrollTrigger's 'once'
        }
      });
      return () => anim.kill();
    }
  }, [duration, staggerAmount, y, ease, start, once, trigger]);

  return textRef;
};


// Add more animation hooks as needed:
// - useParallaxScroll(targetRef, { speed: 0.2 })
// - useCountUp(targetRef, { endValue: 100, duration: 2 })
// - usePathDraw(svgPathRef, { duration: 3 })