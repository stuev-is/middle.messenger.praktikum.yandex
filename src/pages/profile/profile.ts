import Block from '../../lib/Block';

type Props = Record<string, any>;

export default class Profile extends Block {
      constructor(props: Props, elementToReplaceId: string) {
        super(props, elementToReplaceId);
      }
  
      render() {
        return 'profile'
      }
}