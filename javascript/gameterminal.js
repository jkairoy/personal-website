$(function () {

  var term = new window.Terminal.Terminal();
  term.open(document.getElementById('terminal'));

  function runTerminal() {
      if (term._initialized) {
          return;
      }

      term._initialized = true;

      term.prompt = () => {
          term.write('\r\n$ ');
      };

      term.writeln('Play Mancala!');
      term.writeln('See if you can beat my computer');
      prompt(term);

      var input = ""
      term.onKey(e => {
          const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey &&
                            !e.domEvent.ctrlKey && !e.domEvent.metaKey;
          if (e.domEvent.keyCode === 13) {
              prompt(term);
              process(input);
              input = ""
          } else if (e.domEvent.keyCode === 8) {
              // Do not delete the prompt
              if (term._core.buffer.x > 2) {
                  term.write('\b \b');
              }
          } else if (printable) {
              input = input.concat(e.key);
              term.write(e.key);
          }
      });
  }

  function process(line) {
    console.log(line);
  }

  function prompt(term) {
    term.write('\r\n$ ');
  }
  runTerminal();
});
