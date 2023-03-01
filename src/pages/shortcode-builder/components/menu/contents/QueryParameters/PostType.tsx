import { Accordion } from 'flowbite-react';

export default function PostType(props: any) {
    const { attributes, setAttributes } = props

    const postTypesDefault = ["Post", "Media", "Page", "Any"]

    return (
        <Accordion alwaysOpen={true} className="w-full">
            <Accordion.Panel>
                <Accordion.Title className='text-lg font-bold'>
                    Post Type
                </Accordion.Title>
                <Accordion.Content className='!py-0 !px-0 !rounded-none'>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <p className='m-0 text-xs'>Select the Post Types to include in this Ajax Load More query.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <div className="grid grid-cols-2 gap-2">
                                    {postTypesDefault.map((post_type, index) => {
                                        const slug = post_type.toLowerCase()
                                        const id = `post_type-${slug}-${index}`
                                        return (
                                            <div key={index}>
                                                <input type="checkbox" value={slug}

                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setAttributes({ post_types: [...attributes.post_types, e.target.value] })
                                                        } else {
                                                            const new_post_types = attributes.post_types.filter((post_type: string) => {
                                                                return post_type != e.target.value
                                                            })
                                                            setAttributes({ post_types: new_post_types })
                                                        }
                                                    }}

                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"

                                                    checked={attributes?.post_types?.includes(slug) ?? false}
                                                    id={id}
                                                    name="post_type" />
                                                <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{post_type}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <h4 className='m-0 font-semibold text-base'>Sticky Posts</h4>
                                <p className='m-0 text-xs'>Preserve the ordering of sticky posts by having them appear first in the Ajax listing.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <div>
                                    <input type="checkbox"
                                        value={attributes?.enable_sticky_posts ?? false}
                                        onChange={(e) => {
                                            setAttributes({ enable_sticky_posts: e.target.checked })
                                        }}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" name='enable_sticky_posts' 
                                        id="enable_sticky_posts"
                                        />
                                    <label htmlFor="enable_sticky_posts" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enable Sticky Posts</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
