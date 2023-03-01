<a href="#" class="flex flex-wrap flex-row md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="self-stretch max-w-[25%]">
        <?= the_post_thumbnail("thumbnail", ["class" => "self-stretch object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-l-lg", "style" => ""]) ?>
    </div>

    <div class="flex flex-1 flex-col justify-between p-4 leading-normal">
        <h5 class="m-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><?= the_title() ?></h5>
        <p class="m-0 mb-3 font-normal text-gray-700 dark:text-gray-400"><?= get_the_excerpt() ?></p>
    </div>
</a>
