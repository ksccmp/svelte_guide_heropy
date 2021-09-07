<script>
    const zoom = (node, scale = 1.5) => {
        node.style.transition = '1s';

        const zoomIn = () => {
            node.style.transform = `scale(${scale})`;
        }

        const zoomOut = () => {
            node.style.transform = 'scale(1)';
        }

        node.addEventListener('mouseenter', zoomIn);
        node.addEventListener('mouseleave', zoomOut);

        return {
            destory() {
                node.removeEventListener('mouseenter', zoomIn);
                node.removeEventListener('mouseleave', zoomOut);
            }
        }
    }
</script>

<main>
    <div use:zoom></div>
    <div use:zoom={0.7}></div>
</main>

<style>
    div {
        width: 100px;
        height: 100px;
        background-color: tomato;
    }
</style>