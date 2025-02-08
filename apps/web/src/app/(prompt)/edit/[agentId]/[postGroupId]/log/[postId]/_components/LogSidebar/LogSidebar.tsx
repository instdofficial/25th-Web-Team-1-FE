import { IconButton } from '@repo/ui/IconButton';
import { closeArea, sidebarWrapper } from './LogSidebar.css';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

export function LogSidebar() {
  const router = useRouter();
  const { agentId, postGroupId } = useParams();
  const searchParams = useSearchParams();
  const postId = searchParams.get('postId');
  const handleXClick = () => {
    router.push(`/edit/${agentId}/${postGroupId}/detail?postId=${postId}`);
  };
  return (
    <div className={sidebarWrapper}>
      <div className={closeArea}>
        <IconButton icon="x" color="grey300" onClick={handleXClick} />
      </div>
    </div>
  );
}
