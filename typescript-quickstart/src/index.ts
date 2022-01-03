class Helper {
  public component (): HTMLElement {
    const element = document.createElement('div');
    element.innerHTML = 'Hello, how are you';
    return element;
  }
}

document.body.appendChild(new Helper().component());