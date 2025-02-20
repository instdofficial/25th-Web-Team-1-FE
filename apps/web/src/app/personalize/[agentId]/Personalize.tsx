'use client';

import { useRouter } from 'next/navigation';
import {
  Button,
  Icon,
  Label,
  RadioCards,
  Spacing,
  TextField,
  Text,
  Breadcrumb,
  Dropdown,
  Modal,
} from '@repo/ui';
import {
  PersonalizeFormValues,
  PersonalizePageProps,
  TONE_OPTIONS,
} from './type';
import { TitleWithDescription } from '@web/components/common/TitleWithDescription/TitleWithDescription';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { isEmptyStringOrNil } from '@web/utils';
import { useModal, useToast } from '@repo/ui/hooks';
import { useUpdatePersonalSettingMutation } from '@web/store/mutation/useUpdatePersonalSettingMutation';
import { AccountSidebar } from '@web/components/common/AccountSidebar/AccountSidebar';
import { ROUTES } from '@web/routes';
import { useGetAgentQuery } from '@web/store/query/useGetAgentQuery';
import { Agent } from '@web/types';
import { useQueryClient } from '@tanstack/react-query';
import { MainBreadcrumbItem, NavBar } from '@web/components/common';
import Image from 'next/image';
import { isNil } from '@repo/ui/utils';
import { useGetUserQuery } from '@web/store/query/useGetUserQuery';
import { useScroll } from '@web/hooks';
import * as style from './pageStyle.css';
import { useLogoutMutation } from '@web/store/mutation/useLogoutMutation';

export default function Personalize({ params }: PersonalizePageProps) {
  const router = useRouter();
  const toast = useToast();
  const modal = useModal();
  const [scrollRef, isScrolled] = useScroll<HTMLDivElement>({
    threshold: 100,
  });
  const { data: agentData } = useGetAgentQuery();
  const { data: user } = useGetUserQuery();
  const { mutate: updatePersonalSetting } = useUpdatePersonalSettingMutation({
    agentId: params.agentId,
  });
  const { mutate: logout } = useLogoutMutation();
  const queryClient = useQueryClient();

  const { register, watch, setValue, handleSubmit, control } =
    useForm<PersonalizeFormValues>({
      defaultValues: {
        domain: '',
        introduction: '',
        tone: TONE_OPTIONS.CASUAL,
        customTone: '',
      },
    });
  const toneValue = watch('tone');

  const onSubmit = (data: PersonalizeFormValues) => {
    if (
      isEmptyStringOrNil(data.domain) ||
      isEmptyStringOrNil(data.introduction) ||
      isEmptyStringOrNil(data.tone)
    ) {
      return toast.error('모든 필드를 입력해주세요');
    }
    if (
      toneValue === TONE_OPTIONS.CUSTOM &&
      isEmptyStringOrNil(data.customTone)
    ) {
      return toast.error('말투를 입력해주세요');
    }
    updatePersonalSetting(data);
  };

  const handleAccountClick = (id: Agent['id']) => {
    queryClient.clear();
    router.push(ROUTES.HOME.DETAIL(id));
  };

  const handleLogoutClick = () => {
    modal.confirm({
      title: '정말 로그아웃 하시겠어요??',
      icon: <Modal.Icon name="notice" color="warning500" />,
      confirmButton: '로그아웃',
      cancelButton: '취소',
      confirmButtonProps: {
        onClick: () => {
          logout();
        },
      },
    });
  };

  return (
    <div className={style.mainStyle} ref={scrollRef}>
      <NavBar
        leftAddon={
          <Breadcrumb>
            <Breadcrumb.Item>
              <MainBreadcrumbItem href={ROUTES.HOME.ROOT} />
            </Breadcrumb.Item>
          </Breadcrumb>
        }
        rightAddon={
          <Dropdown>
            <Dropdown.Trigger>
              {isNil(user.data.user?.profileImage) ? (
                <div className={style.image} />
              ) : (
                <Image
                  className={style.image}
                  width={40}
                  height={40}
                  src={user.data.user.profileImage}
                  alt="유저 프로필 이미지"
                />
              )}
            </Dropdown.Trigger>
            <Dropdown.Content align="right">
              <Dropdown.Item
                onClick={handleLogoutClick}
                value="option1"
                className={style.dropdownItem}
              >
                <Icon name="logout" size="2.4rem" color="grey400" />
                <Text.P fontSize={18} fontWeight="medium" color="grey1000">
                  로그아웃
                </Text.P>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        }
        isScrolled={isScrolled}
      />
      <AccountSidebar
        agentData={agentData.agents}
        onAccountClick={handleAccountClick}
      />
      <div className={style.contentWrapperStyle}>
        <form
          className={style.formSectionStyle}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.titleSectionStyle}>
            <TitleWithDescription
              title="개인화 설정"
              description={`글을 생성할 때 계정과 관련된 업데이트나 소식을 참고하고 \n특정 활동 분야에 집중하거나, 특정 말투를 사용하여 글을 만들 수 있어요`}
            />
          </div>
          <Spacing size={16} />
          <TextField variant="default">
            <TextField.Label>활동 분야</TextField.Label>
            <TextField.Input
              {...register('domain')}
              placeholder="20자 이내로 입력해주세요"
              maxLength={20}
            />
          </TextField>
          <Spacing size={32} />
          <TextField variant="default">
            <TextField.Label>계정 소개</TextField.Label>
            <TextField.Input
              {...register('introduction')}
              placeholder="계정과 관련된 업데이트나 소식을 추가하세요"
              maxLength={500}
            />
          </TextField>
          <Spacing size={32} />
          <div className={style.utteranceWrapperStyle}>
            <Label>말투</Label>
            <Controller
              name="tone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <RadioCards
                  columns={4}
                  value={value}
                  onChange={(newValue) => {
                    onChange(newValue);
                    if (newValue !== TONE_OPTIONS.CUSTOM) {
                      setValue('customTone', '');
                    }
                  }}
                >
                  <RadioCards.Item value={TONE_OPTIONS.CASUAL}>
                    ~해요
                  </RadioCards.Item>
                  <RadioCards.Item value={TONE_OPTIONS.LESS_FORMAL}>
                    ~합니다
                  </RadioCards.Item>
                  <RadioCards.Item value={TONE_OPTIONS.MORE_FORMAL}>
                    ~해
                  </RadioCards.Item>
                  <RadioCards.Item value={TONE_OPTIONS.CUSTOM}>
                    직접 입력할게요
                  </RadioCards.Item>
                </RadioCards>
              )}
            />
            {toneValue === TONE_OPTIONS.CUSTOM && (
              <TextField variant="default">
                <TextField.Input
                  {...register('customTone')}
                  placeholder="예시: 아저씨 같은 말투, ~했습니다"
                  maxLength={50}
                />
              </TextField>
            )}
          </div>
          <Spacing size={80} />
          <Button
            size="large"
            variant="neutral"
            className={style.submitButtonStyle}
            type="submit"
          >
            저장하기
          </Button>
        </form>
      </div>
    </div>
  );
}
