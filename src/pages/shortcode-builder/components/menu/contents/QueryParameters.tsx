import Offset from './QueryParameters/Offset';
import Ordering from './QueryParameters/Ordering';
import PostFormat from './QueryParameters/PostFormat';
import PostPerpage from './QueryParameters/PostPerpage';
import PostType from './QueryParameters/PostType';

export default function QueryParameters(props : any) {
    const { attributes, setAttributes } = props

    return (
        <div className="p-4">
            <section>
                <h2 className="text-lg font-bold m-0 mb-1">Query Parameters</h2>
                <p className="text-sm m-0">Query Parameters allow you build a custom WP_Query based on Ajax Load More shortcode values.</p>
            </section>

            <hr className="my-4" />

            <section className='flex flex-wrap gap-y-4'>
                <PostPerpage attributes={attributes} setAttributes={setAttributes} />
                <PostType attributes={attributes} setAttributes={setAttributes} />
                <PostFormat attributes={attributes} setAttributes={setAttributes} />
                <Ordering attributes={attributes} setAttributes={setAttributes} />
                <Offset attributes={attributes} setAttributes={setAttributes} />

            </section>
        </div>
    )
}
