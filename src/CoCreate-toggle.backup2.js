const CoCreateToggle = {
	
	init: function() {
		this.initElement(document, 'toggle');
		this.initElement(document, 'hover');
	},
	
	initElement: function(container, prefix) {
		let mainContainer = container || document;
		const self = this;
		if (!mainContainer.querySelectorAll) {
			return;
		}
		
		let elements = mainContainer.querySelectorAll(`[data-${prefix}]`);
		if (elements.length === 0 && mainContainer != document && mainContainer.hasAttributes(`[data-${prefix}]`)) {
			elements = [mainContainer];
		}
		
		elements.forEach((element) => self.__initElementEvent(element, prefix));
	},
	
	__initElementEvent: function(element, prefix) {
		
		const self = this;
		let eventNames = []; 
		
		if (prefix === 'toggle') eventNames = ['click']
		if (prefix === 'hover') eventNames = ['mouseover', 'mouseout'];
	
		eventNames.forEach((event_name) => {
			element.addEventListener(event_name, function() {
				self.__changeElementStatus(element, prefix)
			});
		})
	},
	
	__changeElementStatus: function(element, prefix) {
		const self =this;
		let values = element.dataset[prefix].split(',');
		if (!values || values.length == 0) {
			return;
		}
		
		let target_attribute = element.dataset[`${prefix}_attribute`] || 'class';
		let targetSelector = element.dataset[`${prefix}_element`];
		let targetClosest = element.dataset[`${prefix}_closest`];
		
		let targetElements = [element]
		if (typeof(targetClosest) != 'undefined') {
			targetElements = [element.closest(targetClosest)];
		}
		
		if (targetSelector) {
			targetElements = document.querySelectorAll(targetSelector);
		}

		values = values.map(x => x.trim())
		targetElements.forEach((el) => self.setValue(el, target_attribute, values));
	},
	
	setValue: function(element, attrName, values) {
		if (element.getAttribute(attrName) === null) {
			return;
		}
		let attrValues = element.getAttribute(attrName).split(' ').map(x => x.trim());
		let oldValue = values.filter(x => attrValues.includes(x))[0] || '';
		let newValue = this.__getNextValue(values, oldValue)
		
		if (attrName === 'class') {
			if (oldValue != '') {
				element.classList.remove(oldValue);
				if (values.length === 1) {
					return;
				}
			}
			
			if (newValue != '') {
				element.classList.add(newValue);
			}
		} else {
			element.setAttribute(attrName, newValue);
		}
	},

	__getNextValue: function(values, val) {
		let size = values.length;
		let nn = values.indexOf(val);
		if (nn == -1) {
			return values[0];
		} else {
			return values[(nn + 1) % size];
		}
	}
}

CoCreateToggle.init();