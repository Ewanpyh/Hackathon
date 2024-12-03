document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", document.getElementById("textInput").value);
    formData.append("image", document.getElementById("imageInput").files[0]);
    formData.append("audio", document.getElementById("audioInput").files[0]);

    const responseText = document.getElementById("responseText");
    responseText.innerText = "Processing your request... ⏳";

    try {
        const response = await fetch("/api/generate", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        responseText.innerText = result.answer || "No response received.";
    } catch (error) {
        responseText.innerText = "An error occurred. Please try again later.";
    }
});