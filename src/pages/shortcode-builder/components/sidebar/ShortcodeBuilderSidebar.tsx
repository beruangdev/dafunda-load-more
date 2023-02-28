import { __ } from '@wordpress/i18n';
import Icon from '../../../../components/Icon';

export default function ShortcodeBuilderSidebar() {
    return (
        <div className="col-span-3 h-full relative">
            <div className="flex flex-col bg-white rounded-md sticky top-12 shadow-xl">
                <div className="px-3 mb-3">

                    <h5 className="text-base font-semibold py-2">Shortcode Output</h5>
                    <hr />
                    <p className="py-2">Place the following shortcode into the content editor or widget area of your theme.</p>
                    <div className="bg-red-500 w-full min-h-[100px] rounded-md">
                        <p className='text-white p-2 text-xs'>[ajax_load_more post_type="post" posts_per_page="10"]</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-3 flex justify-between">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-sm text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Copy Shortcode</button>


                    <button type="button" className="text-blue-600 rounded-sm text-xs px-3 py-1.5 text-center inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>

                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
