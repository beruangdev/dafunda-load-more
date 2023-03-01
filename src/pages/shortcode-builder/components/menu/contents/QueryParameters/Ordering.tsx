import { Accordion } from 'flowbite-react';
import Select from 'react-select'

const order_direction_options = [
    { value: 'desc', label: 'DESC (default)' },
    { value: 'asc', label: 'ASC' },
]

const order_by_options = [
    { value: 'date', label: 'Date (default)' },
    { value: 'title', label: 'Title' },
    { value: 'name', label: 'Name' },
    { value: 'menu-order', label: 'Menu Order' },
    { value: 'author', label: 'Author' },
    { value: 'id', label: 'ID' },
    { value: 'comment-count', label: 'Comment Count' },
    { value: 'modified', label: 'Modified' },
    { value: 'meta_value_num', label: 'meta_value_num' },
]

export default function Ordering(props: any) {
    const { attributes, setAttributes } = props

    return (
        <Accordion alwaysOpen={true} className="w-full">
            <Accordion.Panel>
                <Accordion.Title className='text-lg font-bold'>
                    Ordering
                </Accordion.Title>
                <Accordion.Content className='!py-0 !px-0 !rounded-none'>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap border-b border-gray-200">
                            <div className="basis-3/12 flex flex-wrap flex-col gap-3 bg-gray-100/40 p-4 border-r border-gray-200">
                                <p className='m-0 text-xs'>Sort posts by Order and Orderby parameters.</p>
                            </div>
                            <div className="basis-9/12 p-4 flex flex-wrap flex-col gap-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <Select
                                    className='react-select'
                                    value={attributes.order_direction ?? null}
                                        options={order_direction_options}
                                        onChange={(order_direction) => {
                                            setAttributes({ order_direction })
                                        }}
                                    />
                                    <Select
                                    className='react-select'
                                    value={attributes.order_by ?? null}
                                        options={order_by_options}
                                        onChange={(order_by) => {
                                            setAttributes({ order_by })
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}
