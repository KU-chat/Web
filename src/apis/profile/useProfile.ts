import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '../api'

// 프로필 정보 가져오기
const fetchProfile = async () => {
  const response = await api.get('/profile')
  return response.data
}

// 프로필 업데이트
const updateProfile = async (profileData: any) => {
  const response = await api.put('/profile', profileData)
  return response.data
}

// 커스텀 훅
export const useProfile = () => {
  const queryClient = useQueryClient()

  // ✅ 쿼리 키를 객체로 전달하여 오류 해결
  const {
    data: profile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  })

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] }) // 업데이트 후 최신 데이터 가져오기
    },
  })

  return {
    profile,
    isLoading,
    error,
    updateProfile: mutation.mutateAsync,
  }
}
