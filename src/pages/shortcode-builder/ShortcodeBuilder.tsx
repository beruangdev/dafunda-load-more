import { useState, useEffect } from "react"
import Menu from "./components/menu/ShortcodeBuilderMenu"
import ShortcodeBuilderSidebar from "./components/sidebar/ShortcodeBuilderSidebar"

const defaultAttributes = {
    post_types: ["post"],
    post_perpage: 5,
    post_format: { value: 'standard', label: 'Standard' },
    order_direction: { value: 'desc', label: 'DESC (default)' },
    order_by: { value: 'date', label: 'Date (default)' },
    enable_sticky_posts: false,
    offset: 0
}

export default function ShortcodeBuilder() {

    const [attributes, setAttributes] = useState({
        post_types: ["post"],
        post_perpage: 5,
        enable_sticky_posts: false,
        offset: 0,
        post_format: { value: 'standard', label: 'Standard' },
        order_direction: { value: 'desc', label: 'DESC (default)' },
        order_by: { value: 'date', label: 'Date (default)' },
    })

    const [shortcode, setShortcode] = useState("[dafunda-load-more]")

    function setAttr(params: any) {
        setAttributes({ ...attributes, ...params })
    }

    function arrayEquals(a: object, b: object) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    function objEquals(a: object, b: object) {
        return JSON.stringify(a) == JSON.stringify(b)
    }

    useEffect(() => {
        let new_shortcode = ["dafunda-load-more"]
        if (!arrayEquals(attributes.post_types, defaultAttributes.post_types)) {
            new_shortcode.push(`post_types="${attributes.post_types.join(",")}"`)
        }
        if (attributes.post_perpage != defaultAttributes.post_perpage) {
            new_shortcode.push(`post_perpage="${attributes.post_perpage}"`)
        }
        if (attributes.enable_sticky_posts != defaultAttributes.enable_sticky_posts) {
            new_shortcode.push(`enable_sticky_posts="${attributes.enable_sticky_posts}"`)
        }
        if (attributes.offset != defaultAttributes.offset) {
            new_shortcode.push(`offset="${attributes.offset}"`)
        }
        if (!objEquals(attributes.post_format, defaultAttributes.post_format)) {
            new_shortcode.push(`post_format="${attributes.post_format.value}"`)
        }
        if (!objEquals(attributes.order_direction, defaultAttributes.order_direction)) {
            new_shortcode.push(`order_direction="${attributes.order_direction.value}"`)
        }
        if (!objEquals(attributes.order_by, defaultAttributes.order_by)) {
            new_shortcode.push(`order_by="${attributes.order_by.value}"`)
        }
        setShortcode(`[${new_shortcode.join(" ")}]`)
    }, [attributes])

    return (
        <>
            <div className="w-full p-4 relative">
                <div className="grid grid-cols-12 gap-4">
                    <Menu attributes={attributes} setAttributes={setAttr} />
                    <ShortcodeBuilderSidebar shortcode={shortcode} attributes={attributes} setAttributes={setAttr} />
                </div>
            </div>
        </>
    )
}
