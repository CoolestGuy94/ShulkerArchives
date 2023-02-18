const copyButtonLabel = "<img src=\"../../assets/copy.png\">";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerHTML = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
    }
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Copied";

    setTimeout(() => {
        button.innerHTML = copyButtonLabel;
    }, 700);
}