/*
  This is a JavaScript file! This is a good place to write
  event handlers. These are functions that are run in response
  to certain events. For example, if you have an HTML button, you
  can assign an onClick handler to fire every time that event occurs.
*/

// This is an event handler that fires when everything on the page finishes loading
// It's good to call functions from here to make sure the HTML element is done
// rendering before you try to reference it
window.onload = () => {
  setTimeout(fillColumn(12, 'twelve-column-example'), 0);
  setTimeout(fillColumn(4, 'four-column-example'), 0);
  setTimeout(fillColors('text', 'text-colors-example'), 0);
  setTimeout(fillColors('bg', 'background-colors-example'), 0);
  setTimeout(fillPaddingExample('p', 'padding-example'), 0);
  setTimeout(fillPaddingExample('m', 'margin-example'), 0);
};

function fillPaddingExample(classPrefix, rootEltId) {
  const row = document.getElementById(rootEltId);

  // Remove the spinner
  row.removeChild(row.firstElementChild);

  for (let i = 0; i <= 5; ++i) {
    const outer = document.createElement('div');
    outer.className = 'col-md-2 border-secondary';
    if (i < 5) {
      outer.className += ' border-right';
    }

    const inner = document.createElement('div');
    inner.className = `${classPrefix}-${i}`;
    inner.innerText = `.${inner.className}`;
    inner.className += ' bg-dark text-light text-center';

    outer.appendChild(inner);
    row.appendChild(outer);
  }
}

function fillColumn(numColumns, rootEltId) {
  const row = document.getElementById(rootEltId);

  // Remove the spinner
  row.removeChild(row.firstElementChild);

  const colStyle = `col-md-${12/numColumns}`;
  for (let i = 1; i <= numColumns; ++i) {
    let col = document.createElement('div');
    let className;
    if (i % 2 === 1) {
      className = colStyle + ' bg-primary';
    } else {
      className = colStyle + ' bg-secondary';
    }

    col.className = className;
    col.innerText = i;

    row.appendChild(col);
  }
}

function fillColors(classPrefix, rootEltId) {
  const col = document.getElementById(rootEltId);

  // Remove the spinner
  col.removeChild(col.firstElementChild);

  const variants = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'muted',
    'white'
  ];

  variants.forEach((variant, idx) => {
    const row = document.createElement('div');
    row.className = `${classPrefix}-${variant}`;
    row.innerText = `.${row.className}`;
    row.className += ' p-2 rounded';

    if (idx === 0) {
      row.className += ' mt-3';
    } else {
      col.appendChild(
        document.createElement('hr')
      );
    }

    col.appendChild(row);
  });
}

function handleClick(element) {
  // You can print messages to the console
  console.log('The user clicked this button!');

  // You can print objects to the console
  console.log(element);

  // Using our reference to the button element, we can 
  // change the text that is displayed. It used to be
  // 'Click me!'
  element.innerText = 'You Clicked Me!';
}