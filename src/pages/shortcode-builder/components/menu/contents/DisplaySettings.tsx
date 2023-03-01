import { Accordion } from 'flowbite-react';
import { useState } from 'react';
import Options from './DisplaySettings/Options';

export default function DisplaySettings(props: any) {

    const [attributes, setAttributes] = useState({
        // data: null
    })

    function setAttr(params: any) {
        setAttributes({ ...attributes, ...params })
    }

    return (
        <div className="p-4">
            <section>
                <h2 className="text-lg font-bold m-0 mb-1">Display Setting</h2>
                <p className="text-sm m-0">Display Settings allow you create a custom Ajax Load More experience for your visitors.</p>
            </section>

            <hr className="my-4" />

            <section className='flex flex-wrap gap-y-4'>
                <Options attributes={attributes} setAttributes={setAttr} />

            </section>
        </div>
    )
}
