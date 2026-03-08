export function handle_errors(data) {

    const container = document.getElementById("error-container");

    container.innerHTML = "";
    // empty first !!!

    if (!data.error_messages) {
        return;
    }

    data.error_messages.forEach(msg => {

        const notice = document.createElement("div");
        notice.classList.add("error-notice");
        notice.classList.add("notice");

        notice.textContent = msg;

        container.appendChild(notice);

    }
    )


}