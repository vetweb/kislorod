//Function Floaty Label


const Floaty = () => {
	function onFocus() {
		setLabelActive(this.floatingLabel);
	}

	function onBlur() {
		setLabel(this);
	}

	function setLabelActive(label) {
		label.classList.add('floating-label-active');
	}

	function setLabelInactive(label) {
		label.classList.remove('floating-label-active');
	}

	function setLabel(input = {}) {
		if (input.value && input.value.length) {
			setLabelActive(input.floatingLabel);
		} else {
			setLabelInactive(input.floatingLabel);
		}
	}

	const inputs = [].slice.call(document.querySelectorAll('[floating-label]'));
	inputs.forEach(input => {
		const inputId = input.id,
			placeholder = input.getAttribute('floating-label');

		let labelEl = document.createElement('label');

		labelEl.setAttribute('for', inputId);
		labelEl.innerHTML = placeholder;
		labelEl.classList.add('form__label');

		input.floatingLabel = labelEl;
		input.parentNode.appendChild(labelEl);

		input.addEventListener('focus', onFocus);
		input.addEventListener('blur', onBlur);

		setLabel(input);
	});
}
import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
	let element = document.getElementsByClassName('js-phone');
	let maskOptions = {
		mask: '+{7}(000)000-00-00'
	};
	let mask = IMask(element, maskOptions);
})
