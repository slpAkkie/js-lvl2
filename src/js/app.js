const rootEl = document.querySelector('#root');
rootEl.innerHTML = `
<div>
  <form>
    <div>
      <label for="text-input">Some text</label>
      <input data-id="text-input" id="text-input" type="text">
    </div>
    <div>
      <label>
        <input data-id="checkbox-input" type="checkbox"> Check me
      </label>
    </div>
    <div>
      <input data-id="file-input" type="file">
    </div>
  </form>
  <div data-id="content"></div>
</div>
`;

const contentEl = document.querySelector('[data-id="content"]');

const inputEl = document.querySelector('[data-id="text-input"]');
// change - only on loosing focus (click or tab)
// input
// inputEl.addEventListener('change', (evt) => {
//   evt.target.value = evt.target.value.trim().toUpperCase();
// });


// Good: Autocomplete + Async Validation -> ^...$
// Think about: Input Mask:
// - Ctrl+V
// - Delete/BackSpace
// let validInput = inputEl.value;
// inputEl.addEventListener('input', (evt) => {
//   if (!/^[0-9]*$/.test(inputEl.value)) {
//     inputEl.value = validInput;
//     return;
//   }

//   if (evt.data === null) {
//     validInput = inputEl.value;
//     return;
//   }

//   if (!/[0-9]/.test(evt.data)) {
//     inputEl.value = validInput;
//     return;
//   }

//   validInput = inputEl.value;
// });

// inputEl.addEventListener('keydown', (evt) => {
//   evt.preventDefault();
//   debugger;
// });

// const checkboxEl = document.querySelector('[data-id="checkbox-input"]');
// checkboxEl.addEventListener('change', (evt) => {
//   debugger;
// });

const fileInputEl = document.querySelector('[data-id="file-input"]');
fileInputEl.addEventListener('change', async (evt) => {
  const files = [...evt.target.files];

  const [firstFile] = files;
  try {
    const response = await fetch('http://localhost:9999', {
      method: 'POST',
      body: firstFile,
    });

    const responseData = await response.json();
    debugger;

  } catch (e) {
    console.error(e);
  }
});
