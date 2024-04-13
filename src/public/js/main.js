const navItems = document.querySelectorAll('.sidebar .nav:not(.sub-menu) > div > .nav-item');

const routes = ['/', '/users', '/categories', '/courses'];

routes.some((route, index) => {
    if (route === location.pathname) {
        navItems[index].classList.add('active');
        return true;
    }
});

const handleForm = () => {
    const form = document.forms['form'];
    const btnCreate = document.querySelector('#btn-create');
    const btnEdit = document.querySelector('#btn-edit');
    const modal = document.querySelector('#exampleModal');
    const formDelete = document.forms['form-delete'];
    const btnConfirmDelete = document.querySelectorAll('#btn-confirm-delete');
    const btnDelete = document.querySelector('#btn-delete');

    btnCreate.onclick = function () {
        form.submit();
    };

    btnConfirmDelete.forEach(
        (item) =>
            (item.onclick = function (e) {
                const id = e.target.dataset.id;
                formDelete.action = `${formDelete.action}/${id}?_method=DELETE`;
            }),
    );

    btnDelete.onclick = () => {
        formDelete.submit();
    };
};

handleForm();
