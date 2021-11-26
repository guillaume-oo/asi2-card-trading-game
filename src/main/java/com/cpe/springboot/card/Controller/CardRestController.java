package com.cpe.springboot.card.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.cpe.springboot.card.model.CardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cpe.springboot.card.model.CardModel;
import com.cpe.springboot.common.tools.DTOMapper;
import com.cpe.springboot.user.model.UserModel;

//ONLY FOR TEST NEED ALSO TO ALLOW CROOS ORIGIN ON WEB BROWSER SIDE
@CrossOrigin
@RestController
public class CardRestController {

	private final CardModelService cardModelService;
	
	public CardRestController(CardModelService cardModelService) {
		this.cardModelService=cardModelService;
	}
	
	@RequestMapping("/cards")
	private List<CardDTO> getAllCards() {
		List<CardDTO> cLightList=new ArrayList<>();
		for(CardModel c:cardModelService.getAllCardModel()){
			cLightList.add(new CardDTO(c));
		}
		return cLightList;

	}
	
	@RequestMapping("/card/{id}")
	private CardDTO getCard(@PathVariable String id) {
		Optional<CardModel> rcard;
		rcard= cardModelService.getCard(Integer.valueOf(id));
		if(rcard.isPresent()) {
			return DTOMapper.fromCardModelToCardDTO(rcard.get());
		}
		return null;

	}
	
	@RequestMapping(method=RequestMethod.POST,value="/card")
	public void addCard(@RequestBody CardDTO card) {
		cardModelService.addCard(DTOMapper.fromCardDtoToCardModel(card));
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/card/{id}")
	public void updateCard(@RequestBody CardDTO card,@PathVariable String id) {
		card.setId(Integer.valueOf(id));
		cardModelService.updateCard(DTOMapper.fromCardDtoToCardModel(card));
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/card/{id}")
	public void deleteUser(@PathVariable String id) {
		cardModelService.deleteCardModel(Integer.valueOf(id));
	}

	@RequestMapping("/cards_to_sell")
	private List<CardDTO> getCardsToSell() {
		List<CardDTO> list=new ArrayList<>();
		for( CardModel c : cardModelService.getAllCardToSell()){
			CardDTO cLight=new CardDTO(c);
			list.add(cLight);
		}
		return list;

	}
	
}
