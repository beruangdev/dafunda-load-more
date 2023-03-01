import { Accordion } from 'flowbite-react';
import Select from 'react-select'

const options = [
    { value: 'standard', label: 'Standard' },
    { value: 'video', label: 'Video' },
    { value: 'gallery', label: 'Gallery' }
]

export default function PostFormat(props: any) {
    const { attributes, setAttributes } = props

    return (
        <Accordion alwaysOpen={true} className="w-full">
            <Accordion.Panel>
                <Accordion.Title className='text-lg font-bold'>
                    Post Format
                </Accordion.Title>
                <Accordion.Content className='!py-0 !px-0 !rounded-none'>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <p className='m-0 text-xs'>Select the Post Types to include in this Ajax Load More query.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <Select
                                    className='react-select'
                                    value={attributes.post_format ?? null}
                                    options={options}
                                    onChange={(post_format) => {
                                        setAttributes({ post_format })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
