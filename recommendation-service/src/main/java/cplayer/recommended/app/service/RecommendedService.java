package cplayer.recommended.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cplayer.recommended.app.model.Recommended;
import cplayer.recommended.app.repository.RecommendedRepository;

@Service // These class files are used to write business logic in a different layer,
			// separated from @RestController class file
public class RecommendedService {

	@Autowired // The @Autowired annotation can be used to autowire bean on the setter method
	private RecommendedRepository recommendedRepository;

	public List<Recommended> getAllData() {
		List<Recommended> list = recommendedRepository.findAll();
		list.removeIf(e -> (e.isRecommend()==false));
		return list;
	}
	

	

	public boolean addData(Recommended recommended) {
		try {
			int pid = recommended.getPid();
			List<Recommended> list1 = recommendedRepository.findAll();
			for (Recommended obj : list1) {
				if (obj.getPid() == pid) {
					int count = recommendedRepository.findById(pid).get().getCount();
					recommendedRepository.deleteById(pid);
					recommended.setRecommend(true);
					recommendedRepository.save(recommended);
					return true;
				}
			}
			recommended.setRecommend(true);
			recommendedRepository.save(recommended);
			return true;

		} catch (Exception e) {
			return false;
		}
	}

	public boolean removeData(int id) {
		try {
			List<Recommended> list2 = recommendedRepository.findAll();
			for (Recommended obj1 : list2) {
				if (obj1.getPid() == id) {
					Recommended recom = recommendedRepository.findById(id).get();
					recommendedRepository.deleteById(id);
					recom.setRecommend(false);
					recommendedRepository.save(recom);
				}
			}
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
