document.querySelectorAll<HTMLElement>('[data-audio-guide]').forEach(root => {
  const player = root.querySelector<HTMLAudioElement>('[data-audio-player]')!;
  const chapters = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-audio-chapter]'));
  const full = root.querySelector<HTMLAnchorElement>('[data-audio-full]');
  const title = root.querySelector<HTMLElement>('[data-current-track]')!;
  const status = root.querySelector<HTMLElement>('[data-audio-status]')!;
  const previous = root.querySelector<HTMLButtonElement>('[data-audio-prev]')!;
  const next = root.querySelector<HTMLButtonElement>('[data-audio-next]')!;
  const speed = root.querySelector<HTMLSelectElement>('[data-audio-speed]')!;
  const it = root.dataset.lang === 'it';
  let selected = 0;
  let request = 0;
  const update = () => {
    chapters.forEach((link,index) => {
      if (index === selected) link.setAttribute('aria-current','true');
      else link.removeAttribute('aria-current');
    });
    previous.disabled = selected <= 0;
    next.disabled = selected < 0 || selected >= chapters.length-1;
  };
  const play = async (index: number) => {
    const track = index === -1 ? full : chapters[index];
    if (!track) return;
    const token = ++request;
    player.pause();
    selected = index;
    player.src = track.href;
    player.playbackRate = Number(speed.value);
    title.textContent = track.dataset.title ?? '';
    player.setAttribute('aria-label', title.textContent);
    status.textContent = '';
    update();
    try { await player.play(); }
    catch (error) {
      if (token === request && (!(error instanceof DOMException) || error.name !== 'AbortError')) {
        status.textContent = it ? 'Riproduzione non avviata. Usa i controlli del lettore o apri il file audio.' : 'Playback did not start. Use the player controls or open the audio file.';
      }
    }
  };
  const intercept = (event: MouseEvent, index: number) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); void play(index);
  };
  chapters.forEach((link,index) => link.addEventListener('click', event=>intercept(event,index)));
  full?.addEventListener('click', event=>intercept(event,-1));
  root.querySelector('[data-audio-start]')?.addEventListener('click',()=>{void play(0);});
  previous.addEventListener('click',()=>{if(selected>0) void play(selected-1);});
  next.addEventListener('click',()=>{if(selected>=0 && selected<chapters.length-1) void play(selected+1);});
  speed.addEventListener('change',()=>{player.playbackRate=Number(speed.value);});
  player.addEventListener('ended',()=>{
    if(selected>=0 && selected<chapters.length-1) void play(selected+1);
    else status.textContent = it ? 'Ascolto completato.' : 'Listening complete.';
  });
  player.addEventListener('error',()=>{
    status.textContent = it ? 'Questo audio non è disponibile. Riprova o scegli un altro capitolo.' : 'This audio is unavailable. Try again or choose another chapter.';
  });
  root.querySelector<HTMLElement>('[data-audio-tools]')!.hidden=false;
  update();
});
export {};
