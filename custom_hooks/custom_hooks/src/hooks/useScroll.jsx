// use to make scroll dynamic pagination
import { useEffect } from "react";
import { useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    const observer = useRef()

    useEffect(() => {
        const options = {
            root: parentRef.current, //отслеживаемый объект
            rootMargin: '0px', //
            threshold: 0 //на сколько пересечь элемент , если 0 то как только появился в зоне видимости, если 1 то полностью
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log("intersected")
                callback()
            }
        }, options)

        observer.current.observe(childRef.current)

        return function () {
            observer.current.unobserve(childRef.current) //отписываемся от слежки элемента
        }

    }, [callback])
}