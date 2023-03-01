import { Accordion } from 'flowbite-react';

export default function Offset(props: any) {
    const { attributes, setAttributes } = props

    return (
        <Accordion alwaysOpen={true} className="w-full">
            <Accordion.Panel>
                <Accordion.Title className='text-lg font-bold'>
                    Offset
                </Accordion.Title>
                <Accordion.Content className='!py-0 !px-0 !rounded-none'>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <p className='m-0 text-xs'>Offset the initial query by 'x' number of posts.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <input type="number" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={attributes?.offset ?? 0}
                                    onChange={(e) => {
                                        setAttributes({ offset: e.target.value })
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
