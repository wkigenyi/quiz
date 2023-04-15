const withAuthGuard = WC => {
    const MyComp = (props) => {
      return (
          <WC {...props} />
        );
    }
    MyComp.displayName = 'With Auth'
    return MyComp;
  }