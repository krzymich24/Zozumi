import { BoulderCard } from './BoulderCard';

export function Boulder() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <header className="sticky top-0 z-10 bg-base-200 p-2">
          {/* <BoulderCard id={1} name={"Trasa"} grade={"5a"} author={"Jan"} image={"PRW.jpg"} */}
          {/*             isCollapsed /> */}
        </header>
        <aside>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Your feedback..." className="input-bordered input w-full" />
            <div className="my-1 flex">
              <p className="flex-auto">
                Finished as:
                <button className="btn-outline btn-sm btn ml-1">Flash</button>
                <button className="btn-outline btn-sm btn ml-1">Project</button>
              </p>

              <p>
                Or just:
                <button className="btn-primary btn-sm btn ml-1">Leave Feedback</button>
              </p>
            </div>
          </form>
        </aside>
        <div className="divider" />
        <main>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
          </div>

          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fartwork-car-concept-art-colorful-custom-made-Fernando-Correa-1755033.jpg&f=1&nofb=1&ipt=2cd8e67f96d1d6b4dbfa054e9d3669229cf491f9db3899a3984b9eceadf28a02&ipo=images"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin Skywalker <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
          </div>
        </main>
      </div>
    </div>
  );
}
