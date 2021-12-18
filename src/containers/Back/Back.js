import "./Back.scss";

function Back() {
  // const [scrollPos, setScrollPos] = useState(0);

  // const watchWheel = (e) => {
  //   if (scrollPos === 0 && e.deltaY < 1) {
  //     unFlipCard();
  //   }
  // };

  // const watchScrollPosition = (e) => {
  //   setScrollPos(e.target.scrollTop);
  // };

  return (
    <>
      <div className="back">
        <div className="holidayImage"></div>
        <div className="holidayMessage">
          <h2>Happy Holidays</h2>
          <div className="holidayMobileImage"></div>
          <p>
            While 2021 has been a lot less exciting for us than last year, it’s
            brought a mix of comfortable stability alongside the growth that
            sprouts from uprooted plans. We’re still loving our lives in
            Pittsburgh, while Brian inches closer to finishing his PhD in
            Robotics at Carnegie Mellon University and Alyssa has launched into
            her career as a Software Developer at SAE, International. Our Golden
            Irish puppy River has now fully grown into a 55-lb stubborn, wild,
            goose-chasing, fun-loving, and attention-demanding adolescent puppy
            who is well on her way to passing her AKC Canine Good Citizen test
            next year. While our plan was to stay in Pittsburgh this summer,
            Brian was recruited by an autonomous vehicle company in Boston to
            intern as a domain expert for their motion planning team, so we
            spent a few (expensive) weeks in Boston where we got to meet up with
            friends, eat amazing food, and Brian got to implement his research
            on a real autonomous vehicle. Boston was amazing, but we still love
            our home in Pittsburgh. While we thought that was all the excitement
            we’d get this year, around Thanksgiving an unexpected job
            opportunity came up and Alyssa decided to leave SAE to work as the
            first full-time software developer for a startup working on building
            the augmented reality layer of metaverse. We’re both excited for
            this unique opportunity and to see where it takes her in the future.
          </p>
          <p>
            This year has really brought us closer together as a couple as we’ve
            wrestled with questions surrounding future career plans, family
            relationships, and religion. While many of those questions remain
            unanswered, we’ve both found an incredible sense of gratitude for
            what we do have, and for our relationship as a couple. We are
            incredibly grateful for the many open, honest, and real
            conversations we’ve had with friends and family this year, and for
            the depth those conversations have added to those relationships. We
            hope that this Holiday season brings you opportunities to build
            stronger relationships with loved ones both near and far, and a
            renewed sense of gratitude for the gift we each have of living each
            day.
          </p>
        </div>
      </div>
    </>
  );
}

export default Back;
