import { Accordion } from 'flowbite-react';

export default function Options(props: any) {
    const { attributes, setAttributes } = props

    return (
        <Accordion alwaysOpen={true} className="w-full">
            <Accordion.Panel>
                <Accordion.Title className='text-lg font-bold'>
                    Options
                </Accordion.Title>
                <Accordion.Content className='!py-0 !px-0 !rounded-none'>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <h4 className='m-0 font-semibold text-base'>ID</h4>
                                <p className='m-0 text-xs'>Set a unique ID for this Ajax Load More instance.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <a href="#" className='m-0 text-xs text-blue-600 underline dark:text-blue-500 hover:no-underline'>
                                    Generate Unique ID
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <h4 className='m-0 font-semibold text-base'>Button/Loading Style</h4>
                                <p className='m-0 text-xs'>Select an Ajax loading style - you can choose between a Button or Infinite Scroll.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">

                                <input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <a href="#" className='m-0 text-xs text-blue-600 underline dark:text-blue-500 hover:no-underline'>
                                    Generate Unique ID
                                </a>
                            </div>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
