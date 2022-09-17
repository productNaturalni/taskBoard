import { toggleActiveClass } from '../helpers/toggleActiveClass.js'

function handleMoveTask(event) {
    event.preventDefault()

    const eT = event.target
    const task = eT.closest('.task')
    const popupWarning = document.querySelector('#popupWarningMove')

    if (eT.textContent === '>' ||
        eT.textContent.toUpperCase() === 'COMPLITED' ||
        eT.textContent.toUpperCase() === 'BACK') {
        const inpHiddenId = popupWarning.querySelector('.popup-warning-input-hiden-id')
        const inpHiddenEt = popupWarning.querySelector('.popup-warning-input-hiden-et')
        inpHiddenId.setAttribute('value', `${task.id}`)
        inpHiddenEt.setAttribute('value', `${eT.textContent}`)
        toggleActiveClass(popupWarning)
    }
}

export { handleMoveTask }
