document.addEventListener('DOMContentLoaded', function () {
    // 获取所有图片文件名
    /*const images = ['antigravity_icon.png',
        'apple.png',
        'arrow.png',
        'bow.png',
        'chicken.png',
        'chicken_leg_bar.png',
        'coal_block.png',
        'coal_ore.png',
        'eat_food_icon.png',
        'egg.png',
        'egg_cane.png',
        'feathers.png',
        'firecraker.png',
        'flower_1.png',
        'flower_2.png',
        'furnace.png',
        'glass.png',
        'glass_bottle.png',
        'gold_block.png',
        'gold_draft.png',
        'gold_ingot.png',
        'gold_ore.png',
        'gold_sword.png',
        'grass_1.png',
        'grass_2.png',
        'grass_3.png',
        'grass_block.png',
        'hail.png',
        'hen.png',
        'iron_block.png',
        'iron_draft.png',
        'iron_ingot.png',
        'iron_ore.png',
        'iron_sword.png',
        'iron_yoyo.png',
        'iron_yoyo_pic.png',
        'item_bg.png',
        'life_add_icon.png',
        'lucky_block.png',
        'meat.png',
        'milk.png',
        'milk_with_tea.png',
        'mud_water_bottle.png',
        'orange.png',
        'sand_block.png',
        'slik.png',
        'soil_block.png',
        'stone.png',
        'stone_draft.png',
        'stone_sword.png',
        'stone_yoyo.png',
        'stone_yoyo_pic.png',
        'sugar.png',
        'sugar_cane.png',
        'tea-leaf.png',
        'tea_bottle.png',
        'tile_firecraker.png',
        'torch.png',
        'water_bottle.png',
        'water_purifier.png',
        'wood.png',
        'wood_bar.png',
        'wood_broad.png',
        'wood_draft.png',
        'wood_sword.png',
        'wood_yoyo.png',
        'wood_yoyo_pic.png',
        'workbench.png',
        'worm_stive.png'];

    // 随机选择一个图片
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // 设置背景图片
    const sElement = document.querySelector('.s');
    sElement.style.backgroundImage = `url(./image/${randomImage})`;

    const imageNameElement = document.getElementById('image-name');
    imageNameElement.textContent = `Image: ${randomImage}`;*/

    let loadingTextElement = document.getElementById('loading-text');
    let dots = 0;

    function updateLoadingText() {
        loadingTextElement.textContent = 'loading' + '.'.repeat(dots);
        dots = (dots + 1) % 4; // 循环1到3
    }

    setInterval(updateLoadingText, 500);
});