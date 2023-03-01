import { Accordion } from 'flowbite-react';

export default function PostPerpage(props: any) {
    const { attributes, setAttributes } = props

    return (
        <Accordion alwaysOpen={true} className="w-full">
            <Accordion.Panel>
                <Accordion.Title className='text-lg font-bold'>
                    Post Per Page
                </Accordion.Title>
                <Accordion.Content className='!py-0 !px-0 !rounded-none'>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <p className='m-0 text-xs'>Select the number of posts to load with each Ajax request.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <input type="number" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={attributes?.post_perpage ?? 20} onChange={(e) => setAttributes({ post_perpage: e.target.value })} />
                            </div>
                        </div>

                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
